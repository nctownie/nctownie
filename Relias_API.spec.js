/// <reference types="cypress" />

context("Test API for AirportGapAPI " , () =>{
    var accesstoken = 'jfcGGYKXND3nX1LU7qQkuiJL'
   
it("Test Post funcitonality" , () =>{
    cy.request({
        method:'POST',
        url:'https://airportgap.dev-tester.com/api/favorites',
       body:{

        "airport_id" : 'CLT'

          },
        
        headers:{
            'authorization' : 'Bearer '+accesstoken,
           
        }

    }).then((res) => {
            expect(res.status).to.eq(201);
           
    })
})




it("Test GET Functionality" , () =>{
    cy.request({
        method:'GET',
        url:'https://airportgap.dev-tester.com/api/favorites',
      
        
        headers:{
            'authorization' : 'Bearer '+accesstoken,
                }

      }).then((res) => {
          expect(res.status).to.eq(200);
      })
    })

    
it("Test GET ID Functionality" , () =>{
    cy.request({
        method:'GET',
        url:'https://airportgap.dev-tester.com/api/favorites/2728',
      
        
        headers:{
            'authorization' : 'Bearer '+accesstoken,
                }

      }).then((res) => {
          expect(res.status).to.eq(200);
      })
    })

it("Test PATCH Functionality", () =>{
    cy.request({
        method:'PATCH',
        url:'https://airportgap.dev-tester.com/api/favorites/2725',
        body:{

           // "id" : 'CLT',
            "note" : 'My Fav Airport for now '
        },
        headers:{
            'authorization' : 'Bearer '+accesstoken,
                }

      }).then((res) => {
          expect(res.status).to.eq(200);
      })

    })

    it("Test Delete Functionality", () =>{
        cy.request({
            method:'DELETE',
            url:'https://airportgap.dev-tester.com/api/favorites/2733',
            body:{
    
               // "id" : 'CLT',
                "note" : 'My Fav Airport for now '
            },
            headers:{
                'authorization' : 'Bearer '+accesstoken,
                    }
    
          }).then((res) => {
              expect(res.status).to.eq(204);
          })
    
        })

})