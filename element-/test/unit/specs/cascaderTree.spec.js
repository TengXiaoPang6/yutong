import { createTest, destroyVM } from '../util';
import CascaderTree from 'packages/cascaderTree';

describe('CascaderTree', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(CascaderTree, true);
    expect(vm.$el).to.exist;
  });
});

