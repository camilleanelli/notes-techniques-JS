console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// ici on transforme le groupe de Nodes en Array:
const panels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hidden toutes les tabpanels
  panels.forEach(panel => panel.hidden = true);

  // marquer les tabs comme non selectionnées
  tabButtons.forEach(function (tab) {
    tab.setAttribute('aria-selected', false);
  })

  // marquer la tab cliquée comme selectionnée
  event.currentTarget.setAttribute('aria-selected', true);

  // trouver le panel associé et le faire apparaitre
  // ici, id va récupérer la propriété id
  const { id } = event.currentTarget;
  console.log(id);
  // solution 1
  // on veur recuperer les aria-labelledby=id
  // const tabpanel = tabs.querySelector(`[aria-labelledby=${id}]`);
  // console.log(tabpanel);
  // tabpanel.hidden = false;

  // autre solutions :
  // retrouver dans tabpanel le bon panel correspondant
  console.log(panels);
  const tabPanel = panels.find(panel => panel.getAttribute('aria-labelledby') === id);
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
