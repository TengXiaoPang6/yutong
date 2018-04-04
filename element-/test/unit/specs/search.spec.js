import { createTest, destroyVM } from '../util';
import Search from 'packages/search';

describe('Search', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Search, true);
    expect(vm.$el).to.exist;
  });
});

