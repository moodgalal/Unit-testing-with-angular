import { TestBed, inject } from '@angular/core/testing';
import { TestService } from './test.service';



describe("Testing service" , ()=>{
    
  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers : [TestService]
    })
  })

  it("Checks if the service is exists", inject([TestService], (service : TestService)=>{
    expect(service).toBeTruthy();
  }))

  it("checks if the add function exists", inject([TestService], (service : TestService)=>{
    expect(service.add).toBeTruthy()
  }))

  it("checks if the add function returns correct number", inject([TestService], (service : TestService)=>{
    expect(service.add(1,2)).toEqual(3)
  }))
})
