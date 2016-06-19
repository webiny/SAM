import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;
const Table = Ui.List.Table;

class EventList extends Webiny.Ui.View {
}

EventList.defaultProps = {

    renderer() {
        const listProps = {
            api: '/entities/sam/event',
            fields: '*',
            searchFields: 'name',
            connectToRouter: true
        };

        const searchProps = {
            placeholder: 'Search by name',
            name: '_searchQuery'
        };

        return (
            <Ui.Grid.Row>
                <Ui.Grid.Col all={12}>
                    <h2>
                        <Ui.Grid.Row>
                            <Ui.Grid.Col all={10}>
                                Events
                            </Ui.Grid.Col>
                            <Ui.Grid.Col all={2}>
                                <Ui.Link type="primary" align="right" route="Sam.Event.Create">Create new Event</Ui.Link>
                            </Ui.Grid.Col>
                        </Ui.Grid.Row>
                    </h2>
                </Ui.Grid.Col>
                <Ui.Grid.Col all={12}>
                    <Ui.List.ApiContainer ui="eventList" {...listProps}>

                        <Ui.List.FormFilters>
                            {(applyFilters, resetFilters) => (
                                <Ui.Grid.Row>
                                    <Ui.Grid.Col all={10}>
                                        <Ui.Input {...searchProps} onEnter={applyFilters()}/>
                                    </Ui.Grid.Col>
                                    <Ui.Grid.Col all={2}>
                                        <Ui.Button type="primary" label="Filter" onClick={applyFilters()}/>
                                        <Ui.Button type="secondary" label="Reset" onClick={resetFilters()}/>
                                    </Ui.Grid.Col>
                                </Ui.Grid.Row>
                            )}
                        </Ui.List.FormFilters>

                        <Table.Table>
                            <Table.Row>
                                <Table.Field name="name" align="left" label="Name" sort="name"/>
                                <Table.TimeAgoField name="createdOn" align="left" label="Created On" sort="createdOn"/>
                                <Table.Actions>
                                    <Table.EditAction route="Sam.Event.Edit"/>
                                    <Table.DeleteAction/>
                                </Table.Actions>

                            </Table.Row>

                            <Table.Empty/>
                        </Table.Table>

                        <Ui.List.Pagination/>
                    </Ui.List.ApiContainer>
                </Ui.Grid.Col>

            </Ui.Grid.Row>
        );
    }
};

export default EventList;