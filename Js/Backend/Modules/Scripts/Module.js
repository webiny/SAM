import Webiny from 'Webiny';
import Views from './Views/Views';

class Scripts extends Webiny.Module {

    init() {
        const Menu = Webiny.Ui.Menu;

        this.registerMenus(
            new Menu('Marketing Tools', [
                new Menu('Sam', [
                    new Menu('Scripts', 'Sam.Script.List')
                ])
            ], 'icon-bell')
        );

        this.registerRoutes(
            new Webiny.Route('Sam.Script.List', '/sam/scripts', Views.EventList, 'SAM - Scripts'),
            new Webiny.Route('Sam.Script.Create', '/sam/script', Views.EventForm, 'SAM - New Script'),
            new Webiny.Route('Sam.Script.Edit', '/sam/script/:id', Views.EventForm, 'SAM - Edit Script')
        );
    }
}

export default Scripts;