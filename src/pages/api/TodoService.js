import instance from "./api";

const todoUrl = (path) => {
  return `/todo/${path}`;
};

const TodoService = {
  getTodo: async () => await instance.get(todoUrl()),
  category: {
    getCategory: async () => await instance.get(todoUrl(`category`)),
    createCategory: async (body) =>
      await instance.post(todoUrl(`category`), body),
    editCategory: async (id, body) =>
      await instance.patch(todoUrl(`category/${id}`), body),
    deleteCategory: async (id) =>
      await instance.delete(todoUrl(`category/${id}`)),
    editCategoryShareable: async (id) =>
      await instance.patch(todoUrl(`category/${id}/is-share`)),
    get42CategoryList: async (body) =>
      await instance.get(todoUrl(`42category-kind`), body),
    get42Category: async () => await instance.get(todoUrl(`42category-kind`)),
    create42Category: async (body) =>
      await instance.post(todoUrl(`42category-kind`), body),
    edit42CategoryShareable: async (id) =>
      await instance.patch(todoUrl(`42category/${id}/is-share`)),
    delete42Category: async (id) =>
      await instance.delete(todoUrl(`42category/${id}`)),
  },
  task: {
    getTask: async () => await instance.get(todoUrl(`task`)),
    createTask: async (body) => await instance.post(todoUrl(`task`), body),
    editTaskContent: async (id, body) =>
      await instance.patch(todoUrl(`task/${id}/content`), body),
    editTaskDone: async (id, body) =>
      await instance.patch(todoUrl(`task/${id}/is-done`), body),
    deleteTask: async (id) => await instance.delete(todoUrl(`task/${id}`)),
    get42Task: async () => await instance.get(todoUrl(`42task`)),
    create42Task: async (body) => await instance.post(todoUrl(`42task`), body),
    edit42TaskContent: async (id, body) =>
      await instance.patch(todoUrl(`42task/${id}/content`), body),
    edit42TaskDone: async (id, body) =>
      await instance.patch(todoUrl(`42task/${id}/is-done`), body),
    delete42Task: async (id) => await instance.delete(todoUrl(`42task/${id}`)),
  },
};

export default TodoService;
