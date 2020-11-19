// src/components/TaskList.test.js

import TaskList from './TaskList.svelte';
import { render } from '@testing-library/svelte';
import { withPinnedTasksData } from './PureTaskList.stories';

test('TaskList ', async () => {
  const { container } = await render(TaskList, {
    props: {
      tasks: withPinnedTasksData,
    },
  });
  expect(container.firstChild.children[0].classList.contains('TASK_PINNED')).toBe(true);
});