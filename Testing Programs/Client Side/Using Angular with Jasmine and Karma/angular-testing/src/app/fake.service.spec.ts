import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';
import { async } from 'rxjs';
import { FakeService } from './fake.service';

describe('FakeService', () => {
  let service: FakeService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(FakeService);    // DI for Service class in testing file 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();     // object created...
  });
  it("testing for sayHello",()=> {
      expect(service.sayHello()).toBe("Welcome to Service code");
  })

  it("Fake Service ",()=> {
      service.loadData().subscribe(result=> {
        expect(result.length).toEqual(200);
      })
  })
});
