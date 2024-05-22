import { AutoGrid } from "@vaadin/hilla-react-crud";
import ContactModel from "Frontend/generated/com/example/application/entities/ContactModel";
import { ContactService } from "Frontend/generated/endpoints";
import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { Button, HorizontalLayout, VerticalLayout } from "@vaadin/react-components";
import { useNavigate } from "react-router-dom";

export const config: ViewConfig = { 
    menu: { 
        icon: 'line-awesome/svg/address-book.svg' 
    } 
};

export default function ContactsView() {
    const navigate = useNavigate()

    return (
        <VerticalLayout>
            <AutoGrid 
                model={ContactModel} 
                service={ContactService} 
                onActiveItemChanged={(e) => {
                    const contact = e.detail.value
                    if (contact?.id) {
                        navigate(`/contacts/${contact.id}`)
                    }
                }}
            />
            <HorizontalLayout className="self-end" theme="margin">
                <Button theme="primary" onClick={() => navigate('/contacts/new')}>
                    New Contact
                </Button>
            </HorizontalLayout>
        </VerticalLayout>
    )
}