import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent            // load the component 
      ],
    }).compileComponents();     // compile that component 
   // console.log("Welcome");
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();     // object or reference created...
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');   // checking title variable value 
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // load the DOM element   
    const compiled = fixture.nativeElement as HTMLElement;  // get the dom reference. 
    // span tag content testing 
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-testing app is running!');
  });

  it("Property testing ",()=> {
      let cref = TestBed.createComponent(AppComponent).componentInstance;
      expect(cref.id).toEqual(100);
      expect(cref.name).toContain("Raj");
      expect(cref.age).toBeGreaterThan(18);
      expect(cref.result).toBeTrue();
      expect(cref.names.length).toEqual(4);
      expect(cref.emp.name).toEqual("Raju");
      console.log(cref.emp.name);
      expect(cref.listOfEmp.length).toBe(3);
      expect(cref.listOfEmp[0].age).toEqual(21);  
  })

  it("DOM Testing ",()=> {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // load the DOM element   
    const compiled = fixture.nativeElement as HTMLElement; // reference of dom
    let h1Content = compiled.getElementsByTagName("h1")[0].textContent;
    expect(h1Content).toBe("Welcome to My Web Page");
    //let p1Content = compiled.getElementById("p1").textContent;
    let p1Content = compiled.querySelector("#p1")?.textContent;
    expect(p1Content).toEqual("Name is Raj Deep"); 
  })

  it("service function testing through component",()=> {
    let cRef = TestBed.createComponent(AppComponent).componentInstance;
    expect(cRef.serMsg).toBe("");
    cRef.callServiceFunction();
    expect(cRef.serMsg).toBe("Welcome to Service code");
  })

});
