export const visualizeData = (data,index, taskContainer) => {
    //visualize the task data: most repeated value, list of elements, string
    return (taskContainer.className === "app-task second_task") ? 
    visualizeSecondTask(data, index, taskContainer) : 
    visualizeFirstThirdTask(data, index, taskContainer)
}

export const visualizeSecondTask = (data, index, taskContainer) => {
    data.forEach(e=> {
        const element = document.createElement("p");
        element.classList.add(`app-task__result_${index}`)
        element.innerText = JSON.stringify(e);
        taskContainer.appendChild(element)
    })
}

export const visualizeFirstThirdTask = (data, index, taskContainer) => {
    const dataField = document.createElement("p");
    dataField.classList.add(`app-task__result_${index}`)
    dataField.innerText = data;
    taskContainer.appendChild(dataField)
}

// return the keys of the dataList in order to use them to create sortButtons and to sort
export const sortKeys = (dataList) => {
    return Object.keys(dataList[0]);
}

// create the buttons to sort the second Task object based on the keys
export const createSortButtons = (keys, taskContainer) => {
    keys.forEach(e => {
        const button = document.createElement("button");
        button.classList.add(`app-task__sort-button`)
        button.innerText = e;
        taskContainer.appendChild(button);
    })
}

// result of task one and three
export const visualizeResult = (finalResult, taskContainer, result) => {
    finalResult.classList.add("app-task__final-result")
    finalResult.innerText = `The result is: ${result}`;
    taskContainer.appendChild(finalResult);
}

// result of the second task order items
export const visualizeOrder = (result) => {
    const dataChange = document.querySelectorAll(".app-task__result_1");
    result.forEach((e,i)=> {
        dataChange[i].innerText = JSON.stringify(e);
    })
}