export const visualizeData = (data,index, taskContainer) => {
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

export const sortKeys = (dataList) => {
    return Object.keys(dataList[0]);
}

export const createSortButtons = (keys, taskContainer) => {
    keys.forEach(e => {
        const button = document.createElement("button");
        button.classList.add(`app-task__sort-button`)
        button.innerText = e;
        taskContainer.appendChild(button);
    })
}

export const visualizeResult = (finalResult, taskContainer, result) => {
    finalResult.classList.add("app-task__final-result")
    finalResult.innerText = `The result is: ${result}`;
    taskContainer.appendChild(finalResult);
}

export const visualizeOrder = (result) => {
    const dataChange = document.querySelectorAll(".app-task__result_1");
    result.forEach((e,i)=> {
        dataChange[i].innerText = JSON.stringify(e);
    })
}