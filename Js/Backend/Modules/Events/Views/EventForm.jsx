import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;

class EventForm extends Webiny.Ui.View {}

EventForm.defaultProps = {
    renderer() {
        const formProps = {
            api: '/entities/sam/events',
            fields: '*',
            connectToRouter: true,
            onSubmitSuccess: () => Webiny.Router.goToRoute('Sam.List'),
            onCancel: () => Webiny.Router.goToRoute('Sam.List')
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
                                    <Ui.CodeEditor label="Content" name="content"/>

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
