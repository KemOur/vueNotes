const options = {
  data() {
    return {
      task: "",
      tasks: [],
    };
  },
  methods: {
    open(task){
      this.$emit('open',task)
    },

    open(task){
      task.toggle = !task.toggle,
          this.saveItems()
    },
    saveItems() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },

    addTask() {
      if (!this.task) {
        return;
      }
      const task = {
        id: Date.now(),
        content: this.task,
      };

      this.tasks.unshift(task);
      this.task = "";
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return id !== task.id;
      });

      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
  mounted() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  },
};

const app = Vue.createApp(options);

app
  .directive("focus", {
    mounted(el) {
      el.focus();
    },
  })
  .mount("#app");
