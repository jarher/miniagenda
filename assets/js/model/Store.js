export class Store {
  static getData(key) {
    const arr = localStorage.getItem(key) || [];
    return arr.length != 0 ? JSON.parse(arr) : arr;
  }

  static setData({ index, type, key, inputsValue }) {
    let data = this.getData(key);

    if (type === "importantCheck") {
      data[index].isImportant = !data[index].isImportant;
    }
    if (type === "finishedCheck") {
      data[index].isFinished = !data[index].isFinished;
    }
    if (type === "createTask") {
      const index = data.length;
      const { taskName, taskDate } = inputsValue;
      data.push({
        indexTask: index,
        title: taskName.substring(0,1).toUpperCase() + taskName.substring(1),
        date: taskDate,
        isImportant: false,
        isFinished: false,
      });
    }
    if (type === "editTask") {
      const { taskName, taskDate } = inputsValue;
      data[index].title =
        taskName.substring(0, 1).toUpperCase() + taskName.substring(1);
      data[index].date = taskDate;
    }
    if (type === "createContact") {
      const index = data.length;
      const { contactName, contactPhone, contactEmail, contactCategory } =
        inputsValue;
        const name = contactName
          .split(" ")
          .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
          .join(" ");
      data.push({
        indexContact: index,
        name: name,
        phone: contactPhone,
        email: contactEmail,
        category: contactCategory,
      });
    }
    if (type === "editContact") {
      const { contactName, contactPhone, contactEmail, contactCategory } =
        inputsValue;
      data[index].name =
        contactName.substring(0, 1).toUpperCase() + contactName.substring(1);
      data[index].phone = contactPhone;
      data[index].email = contactEmail;
      data[index].category = contactCategory;
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  static deleteData(index, key) {
    const data = this.getData(key);
    const delData = data.splice(index, 1);
    for (let i = 0; i < data.length; i++) {
      if (key === "task") {
        data[i].indexTask = i;
      }
      if (key === "contact") {
        data[i].indexContact = i;
      }
    }
    localStorage.setItem(key, JSON.stringify(data));
  }
}
