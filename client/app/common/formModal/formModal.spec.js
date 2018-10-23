import FormModalModule from './formModal';
import FormModalController from './formModal.controller';
import FormModalComponent from './formModal.component';
import FormModalTemplate from './formModal.html';

describe('FormModal', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FormModalModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FormModalController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(FormModalTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = FormModalComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(FormModalTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(FormModalController);
    });
  });
});
