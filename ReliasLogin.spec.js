/// <reference types="cypress" />



describe("Testing of Login App", () => {

    it("Login application", () => {

        cy.visit("https://thinking-tester-contact-list.herokuapp.com/");

        cy.contains("Contact List App");
        cy.contains("Welcome! This application is for testing purposes only. The database will be purged as needed to keep costs down.");
        cy.contains("Log In");
    })

    it("New Sign up", () => {
       cy.contains ("Not yet a user? Click here to sign up!");
       cy.get('#signup').click();
        //Assertion
       cy.url().should("include","/addUser");
       cy.contains("Add User");
       cy.contains("Sign up to begin adding your contacts!")

    })
     
    it("Add New user", () => {
        cy.get('#firstName').type("venkat");
        cy.get('#lastName').type("chunduru");
        cy.get('#email').type("nctownie@gmail.com");
        cy.get('#password').type("Relias#1");
        cy.get('#submit').click();
        //Assertion
        cy.contains("Email address is already in use");
        cy.get('#cancel').click();
        //assertion
       cy.url().should("include","/login");
    
    })



    it("Successfull Login into Application" , () => {

        cy.login('nctownie@gmail.com','Relias#1')
        //assertion
        cy.url().should("include", "/contactList");
  
    })

    // Application throws an error when adding the user using cypress.The same user gets added manually.Seems to be an issue with the app.
    it("Successfully Add Contact Details" , () => {
        cy.contains("Contact List");
        cy.contains("Click on any contact to view the Contact Details");
        cy.get('#add-contact').click()
        cy.url().should("include", "addContact");
        cy.contains("Add Contact");
        cy.get('#firstName').type("venkat1");
        cy.get('#lastName').type("chunduru1");
        cy.get('#birthdate').type("1900-01-01");
        cy.get('#email').type("nctownie@gmail1.com");
        cy.get('#phone').type("7132092938");
        cy.get('#street1').type("8124 valley lane")
        cy.get('#street2').type("optional");
        cy.get('#city').type("Apex");
        cy.get('#stateProvince').type("NC");
        cy.get('#postalCode').type("11111");
        cy.get('#country').type("USA");
        cy.get('#submit').click();
        cy.get('#logout').click();
    })

    it("Validate the Contact list for header elements" , () => {

        cy.login('nctownie@gmail.com','Relias#1');
        cy.get('#myTable').contains('th', 'Name')
        cy.get('#myTable').contains('th', 'Birthdate');
        cy.get('#myTable').contains('th', 'Email');
        cy.get('#myTable').contains('th', 'Phone');
        cy.get('#myTable').contains('th', 'Address');
        cy.get('#myTable').contains('th', 'City, State/Province, Postal Code');
        cy.get('#myTable').contains('th', 'Country');
        cy.get('#logout').click();
    })

    it("Validate the Entry in the contact list " , () => {

        cy.login('nctownie@gmail.com','Relias#1');
        cy.get('#myTable').contains('td', 'venkat1 chunduru1');
        cy.get('#logout').click();
    })

    it("Validate the Edit function of the contact in the Contact list" , () =>{
    
        cy.login('nctownie@gmail.com','Relias#1');
        cy.get('#myTable').contains('td', 'venkat1 chunduru1').click();
        cy.get('#edit-contact').click();
        cy.get('#stateProvince').clear();
        cy.get('#stateProvince').type('PA');
        cy.get('#submit').click();
        cy.get('#return').click();
        cy.url().should('include','/contactList');
        cy.get('#myTable').contains('td','PA');
        cy.get('#logout').click();
    })

    it("Validate the Delete function in the Contact List" , () =>{
        cy.login('nctownie@gmail.com','Relias#1');
        cy.get('#add-contact').click()
        cy.get('#firstName').type("Peter");
        cy.get('#lastName').type("Pan");
        cy.get('#submit').click();
        cy.get('#myTable').contains('td', 'Peter Pan').click();
        cy.url().should('include','/contactDetails');
        cy.get('#delete').click();
        //cy.on('window:confirm', (txt)=>{
          //expect(txt).to.contains('Are you sure you want to delete this contact');
        cy.on('window.confirm', () => true);
        
        cy.get('#logout').should('be.visible').click();

        })

    it("Vaidate the Return to Contact List" , () => {
        cy.login('nctownie@gmail.com','Relias#1');
        cy.get('#myTable').contains('td', 'venkat1 chunduru1').click();
        cy.get('#return').click();
        cy.url().should('include','contactList');
     
        cy.get('#logout').click();


    })

   
    it ("Validating Email login fields for erorr message" , () => {
        cy.get('#email').should('be.empty');
        cy.get('#submit').click();
        cy.contains("Incorrect username or password");
          
    })


    it("Validating Password login field for error message ", () =>{
      cy.get('#password').should('be.empty');
      cy.get('#submit').click();
      cy.contains("Incorrect username or password");

    })
      
        
    it("Incorrect Username" , () => {
            //Verify from the DB the existing list of users
        })
    
    it("Incorrect Password", () =>{
         // Call to DB to authenticate the Password
        })
    
    it("Validate the Username field for all combinations of email address.com,.org,.in, with @, without @..etc", () =>{
         
    
         })
    
    it("Validate the PW field for based on the criteria for the strong, weak password", () =>{
    
        })

    it("Validating the empty First name field for error message" , () =>{
            cy.login('nctownie@gmail.com','Relias#1');
            cy.get('#add-contact').click();
            cy.get('#firstName').focus().blur();
            cy.get('#submit').click();
            cy.contains("Contact validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required.");
            cy.get('#logout').click();
        })

    it("Validating the empty Last name field for error message" , () =>{
            cy.login('nctownie@gmail.com','Relias#1');
            cy.get('#add-contact').click();
            cy.get('#lastName').focus().blur();
            cy.get('#submit').click();
            cy.contains("Contact validation failed: firstName: Path `firstName` is required., lastName: Path `lastName` is required.");
            cy.get('#logout').click();
    
    })

})


    

    
      
    
    
    
        
        
    
        
 

