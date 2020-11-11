<?php
class ReactApp2 extends TPage
{
    public function __construct()
    {
        parent::__construct();
        $this->html = new THtmlRenderer('app/reactApps/react_app_2/dist/index.html');  
        $replaces = [];    
        $this->html->enableSection('main', $replaces); 
        
        $vbox = new TVBox;
        $vbox->style = 'width: 100%';
        $vbox->add(new TXMLBreadCrumb('menu.xml', __CLASS__));
        $vbox->add($this->html);

        TScript::importFromFile('app/reactApps/react_app_2/dist/index.bundle.js');
        parent::add($vbox);
    }
}
?>