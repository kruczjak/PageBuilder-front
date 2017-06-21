import { CodeMirrorDirective } from './code-mirror.directive';

describe('CodeMirrorDirective', () => {
  it('should create an instance', () => {
    const element = jasmine.createSpyObj('native', ['nativeElement']);

    const directive = new CodeMirrorDirective(element);
    expect(directive).toBeTruthy();
  });
});
