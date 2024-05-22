import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { AutoForm } from '@vaadin/hilla-react-crud';
import { HorizontalLayout } from '@vaadin/react-components';
import Contact from 'Frontend/generated/com/example/application/entities/Contact';
import ContactModel from 'Frontend/generated/com/example/application/entities/ContactModel';
import { ContactService } from 'Frontend/generated/endpoints';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const config: ViewConfig = { 
    menu: { 
        exclude: true
    } 
};

export default function ContactDetailsView() {
    const navigate = useNavigate()
    const { contactId } = useParams()
    const [contact, setContact] = useState<Contact>();

    useEffect(() => {
        const getContact = async (id: number) => {
          const contact = await ContactService.get(id);
          setContact(contact);
        }
        if (contactId && contactId != 'new') {
            getContact(Number.parseInt(contactId))
        }
      }, [contactId])

    return (
        <HorizontalLayout theme="margin">
            <AutoForm 
                className='w-full' 
                item={contact} 
                model={ContactModel} 
                service={ContactService} 
                onSubmitSuccess={() => navigate('/contacts')} 
            />
        </HorizontalLayout>
    )
}