package com.example.application.services;

import com.example.application.entities.Contact;
import com.example.application.repositories.ContactRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class ContactService extends CrudRepositoryService<Contact, Long, ContactRepository> {
    
}
