import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;

class EventForm extends Webiny.Ui.View {}

EventForm.defaultProps = {
    renderer() {
        const formProps = {
            api: '/entities/sam/events',
            fields: '*',
            connectToRouter: true,
            onSubmitSuccess: () => Webiny.Router.goToRoute('Sam.Event.List'),
            onCancel: () => Webiny.Router.goToRoute('Sam.Event.List')
        };

        return (
            <Ui.Form.Container ui="eventForm" {...formProps}>
                {(model, container) => (
                    <Ui.Panel.Panel>
                        <Ui.Panel.Header>
                            <Ui.Grid.Row>
                                <Ui.Grid.Col all={6}>
                                    Template
                                </Ui.Grid.Col>
                                <Ui.Grid.Col all={6}>
                                    <Ui.Button type="primary" align="right" onClick={container.submit}>Save Changes</Ui.Button>
                                    <Ui.Button type="default" align="right" onClick={container.cancel}>Go Back</Ui.Button>
                                </Ui.Grid.Col>
                            </Ui.Grid.Row>

                        </Ui.Panel.Header>

                        <Ui.Panel.Body>

                            <Ui.Grid.Row>
                                <Ui.Grid.Col all={12}>

                                    <Ui.Form.Fieldset title="Event"/>

                                    <Ui.Input label="Name" name="name" validate="required"/>
                                    <Ui.CodeEditor label="Content" name="content" mode="javascript" validate="required" description="Place your JavaScript code here. Don't wrap it into script tags."/>

                                </Ui.Grid.Col>

                            </Ui.Grid.Row>

                            <Ui.Grid.Row>
                                <Ui.Grid.Col all={12}>

                                    <Ui.Form.Fieldset title="About"/>

                                    <p>
                                        To execute an event, just do a call to Webiny.Sam.Event method from your JavaScript.
                                    </p>
                                    <pre>Webiny.Sam.Event('MyEventName');</pre>

                                </Ui.Grid.Col>

                            </Ui.Grid.Row>

                        </Ui.Panel.Body>

                    </Ui.Panel.Panel>
                )}
            </Ui.Form.Container>
        );
    }
};


export default EventForm;
