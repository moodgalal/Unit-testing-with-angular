import { LoginComponent } from './login.component';
import { LoginService } from '../providers/login/login.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('login page testing', () => {

  // Version 1 (Plain vanilla jasmine code) <=====================================================================

  // let component: LoginComponent;
   // let service: LoginService;
   // let spy: any;

    // beforeEach(() => {
    //     service = new LoginService();
    //    component = new LoginComponent(service);
    // });



    // afterEach(() => {
    //     service = null;
    //     component = null;
    // });

    // it('can login returns false when the user is not authenticated', () => {
    //   spy = spyOn(service, "isUserAuthenticated").and.returnValue(false);
    //    expect(component.needsLogin()).toBeTruthy();
    // });
    //
    // it('canLogin function return true if the user is authenticated', () => {
    //   spy = spyOn(service, "isUserAuthenticated").and.returnValue(true);
    //   expect(component.needsLogin()).toBeFalsy()
    // });


  // Version 2 (Using angular testing utilities) <=====================================================================

  let component: LoginComponent;
  let fixture : ComponentFixture<LoginComponent>;
  let service : LoginService;

  beforeEach(()=>
  {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [LoginService]
    });
    service = TestBed.get(LoginService);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });
  it('needs login returns true when the user is not authenticated', ()=>{
    expect(service).toBeDefined();
    spyOn(service, "isUserAuthenticated").and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    // expect(service.isUserAuthenticated).toHaveBeenCalled();
  });
  it('needs login returns false when the user is authenticated', ()=>{
    expect(service).toBeDefined();
     spyOn(service, "isUserAuthenticated").and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isUserAuthenticated).toHaveBeenCalled();
  });

});
