import Webiny from 'Webiny';
import Views from './Views/Views';

class Events extends Webiny.Module {

    init() {
        const Menu = Webiny.Ui.Menu;

        this.registerMenus(
            new Menu('Marketing Tools', [
                new Menu('Sam', [
                    new Menu('Events', 'Sam.Event.List')
                ])
            ], 'icon-bell')
        );

        this.registerRoutes(
            new Webiny.Route('Sam.Event.List', '/sam/events', Views.EventList, 'SAM - Scripts & Events'),
            new Webiny.Route('Sam.Event.Create', '/sam/event', Views.EventForm, 'SAM - New Event'),
            new Webiny.Route('Sam.Event.Edit', '/sam/event/:id', Views.EventForm, 'SAM - Edit Event')
        );
    }
}

export default Events;