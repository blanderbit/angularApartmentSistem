import OnePostsModule from './onePosts';
import OnePostsController from './onePosts.controller';
import OnePostsComponent from './onePosts.component';
import OnePostsTemplate from './onePosts.html';

describe('OnePosts', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OnePostsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OnePostsController();
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
      expect(OnePostsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = OnePostsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OnePostsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OnePostsController);
    });
  });
});
