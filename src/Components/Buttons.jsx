import React, { useState } from 'react'

export default function Buttons(props) {

    const [speed, setSpeed] = useState(1);

    const bubbleSort = async () => {
        props.setDisabled(true);
        let arr = [...props.data];
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                arr[j + 1].bgColor = 'pink';
                arr[j].bgColor = 'pink';
                arr[j + 1].textColor = 'violet';
                arr[j].textColor = 'violet';
                props.setData([...arr]);
                await new Promise((resolve => setTimeout(resolve, 500 / speed)))
                if (arr[j].value > arr[j + 1].value) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    await new Promise(resolve => setTimeout(resolve, 500 / speed)); // Wait for .5 seconds
                    props.setData([...arr]);
                }
                arr[j + 1].bgColor = '#ffffff';
                arr[j].bgColor = '#ffffff';
                arr[j + 1].textColor = 'red';
                arr[j].textColor = 'red';
                props.setData([...arr]);
                await new Promise((resolve) => setTimeout(resolve, 500 / speed));
            }
        }
        props.setDisabled(false);
    }

    const insertionSort = async () => {
        props.setDisabled(true);
        let arr = [...props.data];
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            arr[i].bgColor = 'violet';
            arr[i].textColor = 'pink';
            props.setData([...arr]);
            await new Promise((resolve) => setTimeout(resolve, 500 / speed));
            let j = i - 1;
            while (j >= 0 && key.value < arr[j].value) {

                arr[j].bgColor = 'pink';
                arr[j].textColor = 'violet';
                props.setData([...arr]);
                await new Promise((resolve => setTimeout(resolve, 500 / speed)))

                arr[j + 1] = arr[j];
                arr[j + 1].bgColor = 'pink';
                arr[j + 1].textColor = 'violet';
                props.setData([...arr]);
                await new Promise((resolve => setTimeout(resolve, 500 / speed)))

                arr[j + 1].bgColor = '#ffffff';
                arr[j + 1].textColor = 'red';
                props.setData([...arr]);
                await new Promise((resolve => setTimeout(resolve, 500 / speed)))

                j--;

                arr[j + 1].bgColor = '#ffffff';
                arr[j + 1].textColor = 'red';
                props.setData([...arr]);
                await new Promise((resolve => setTimeout(resolve, 500 / speed)))
            }
            arr[j + 1] = key;
            arr[j + 1].bgColor = 'violet';
            arr[j + 1].textColor = 'pink';
            props.setData([...arr]);
            await new Promise((resolve) => setTimeout(resolve, 500 / speed));

            arr[j + 1].bgColor = '#ffffff';
            arr[j + 1].textColor = 'red';
            props.setData([...arr]);
            await new Promise((resolve) => setTimeout(resolve, 500 / speed));
        }
        props.setDisabled(false);
    }

    const selectionSort = async () => {
        props.setDisabled(true);
        let arr = [...props.data];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i].bgColor = 'violet';
            arr[i].textColor = 'pink';
            props.setData([...arr]);
            await new Promise((resolve => setTimeout(resolve, 500 / speed)));

            let k = i;
            for (let j = i + 1; j < arr.length; j++) {
                arr[j].bgColor = 'pink';
                arr[j].textColor = 'violet';
                props.setData([...arr]);
                await new Promise((resolve => setTimeout(resolve, 500 / speed)))
                if (arr[j].value < arr[k].value) {
                    if (k != i) {
                        arr[k].bgColor = '#ffffff';
                        arr[k].textColor = 'red';
                        props.setData([...arr]);
                    }
                    k = j;
                    arr[k].bgColor = 'hotpink';
                    arr[k].textColor = 'yellow';
                    props.setData([...arr]);
                    await new Promise((resolve => setTimeout(resolve, 500 / speed)))
                }
                else {
                    arr[j].bgColor = '#ffffff';
                    arr[j].textColor = 'red';
                    props.setData([...arr]);
                    await new Promise((resolve => setTimeout(resolve, 500 / speed)))
                }
            }
            if (k != i) {
                let temp = arr[i];
                arr[i] = arr[k];
                arr[k] = temp;
                props.setData([...arr])
                await new Promise(resolve => setTimeout(resolve, 500 / speed)); // Wait for 0.5 seconds
            }

            arr[i].bgColor = '#ffffff';
            arr[i].textColor = 'red';
            arr[k].bgColor = '#ffffff';
            arr[k].textColor = 'red';
            props.setData([...arr]);
            await new Promise((resolve) => setTimeout(resolve, 500 / speed));
        }
        props.setDisabled(false);
    }

    const quickSort = async (arr, low = 0, high = arr.length - 1) => {
        if (low < high) {
            const partitionIndex = await partition(arr, low, high);
            await quickSort(arr, low, partitionIndex - 1);
            await quickSort(arr, partitionIndex + 1, high);
        }
    };

    const partition = async (arr, low, high) => {
        const pivot = arr[low].value;
        arr[low].bgColor = 'violet';
        arr[low].textColor = 'pink';
        props.setData([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 500 / speed));

        let i = low + 1;
        let j = high;
        arr[i].bgColor = 'pink';
        arr[i].textColor = 'violet';
        arr[j].bgColor = 'hotpink';
        arr[j].textColor = 'yellow';
        props.setData([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 500 / speed));

        while (i <= j) {
            while (i <= j && arr[i].value <= pivot) {
                arr[i].bgColor = '#ffffff';
                arr[i].textColor = 'red';
                props.setData([...arr]);
                await new Promise((resolve) => setTimeout(resolve, 500 / speed));

                i++;

                if (i <= j) {
                    arr[i].bgColor = 'pink';
                    arr[i].textColor = 'violet';
                    props.setData([...arr]);
                    await new Promise((resolve) => setTimeout(resolve, 500 / speed));
                }
            }
            while (i <= j && arr[j].value > pivot) {
                arr[j].bgColor = '#ffffff';
                arr[j].textColor = 'red';
                props.setData([...arr]);
                await new Promise((resolve) => setTimeout(resolve, 500 / speed));

                j--;

                if (i <= j) {
                    arr[j].bgColor = 'hotpink';
                    arr[j].textColor = 'yellow';
                    props.setData([...arr]);
                    await new Promise((resolve) => setTimeout(resolve, 500 / speed));
                }
            }
            if (i < j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                props.setData([...arr]);
                await new Promise((resolve) => setTimeout(resolve, 500 / speed));


                arr[i].bgColor = '#ffffff';
                arr[i].textColor = 'red';
                arr[j].bgColor = '#ffffff';
                arr[j].textColor = 'red';
                props.setData([...arr]);
                await new Promise((resolve) => setTimeout(resolve, 500 / speed));
            }
        }

        const temp = arr[j];
        arr[j] = arr[low];
        arr[low] = temp;
        props.setData([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 500 / speed));

        arr[low].bgColor = '#ffffff';
        arr[low].textColor = 'red';
        if (i <= high) {
            arr[i].bgColor = '#ffffff';
            arr[i].textColor = 'red';
        }
        if (j >= low) {
            arr[j].bgColor = 'teal';
            arr[j].textColor = 'yellow';
        }
        props.setData([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 500 / speed));


        return j;
    };


    const callQuickSort = () => {
        props.setDisabled(true);
        let arr = [...props.data]
        quickSort(arr);
        // await new Promise((resolve) => setTimeout(resolve, 500/speed));
        // arr = [...props.data]
        // for(let i = 0; i<arr.length; i++){
        //     if(arr[i].bgColor === 'teal'){
        //         arr[i].bgColor = '#ffffff';
        //         arr[i].textColor = 'red';
        //     }
        // }
        // props.setData([...arr]);
        props.setDisabled(false);
    }

    const merge = async (arr, low, mid, high) => {
        let i = low, j = mid + 1;

        let copyArr = [];
        while (i <= mid && j <= high) {
            if (arr[i].value <= arr[j].value) {
                copyArr.push(arr[i]);
                i++;
            }
            else {
                copyArr.push(arr[j]);
                j++;
            }
        }
        while (i <= mid) {
            copyArr.push(arr[i]);
            i++;
        }
        while (j <= high) {
            copyArr.push(arr[j]);
            j++;
        }

        for (let k = low; k <= high; k++) {
            arr[k] = copyArr[k - low];
        }

        props.setData([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 500 / speed));
    }

    const mergeSort = async (arr, low = 0, high = arr.length - 1) => {
        let mid = Math.floor(low + (high - low) / 2);
        if (low < high) {
            await mergeSort(arr, low, mid);
            await mergeSort(arr, mid + 1, high);
            await merge(arr, low, mid, high);
        }
    }

    const callMergeSort = () => {
        props.setDisabled(true);
        let arr = [...props.data];
        mergeSort(arr);
        props.setDisabled(false);
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic outlined example"
            style={{ width: "80vw", display: "flex", justifyContent: "space-between" }}>
            <button type="button" className="btn btn-outline-primary" onClick={bubbleSort} disabled={props.disabled}>
                Bubble Sort
            </button>
            <button type="button" className="btn btn-outline-primary" onClick={insertionSort} disabled={props.disabled}>
                Insertion Sort
            </button>
            <button type="button" className="btn btn-outline-primary" onClick={selectionSort} disabled={props.disabled}>
                Selection Sort
            </button>
            <button type="button" className="btn btn-outline-primary" onClick={callQuickSort} disabled={props.disabled}>
                Quick Sort
            </button>
            <button type="button" className="btn btn-outline-primary" onClick={callMergeSort} disabled={props.disabled}>
                Merge Sort
            </button>

            <div className="btn-group dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    disabled={props.disabled}
                >
                    Speed
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button" onClick={() => {
                        setSpeed(0.5);
                    }}>
                        0.5x
                    </button>
                    <button className="dropdown-item" type="button" onClick={() => {
                        setSpeed(1);
                    }}>
                        1x
                    </button>
                    <button className="dropdown-item" type="button" onClick={() => {
                        setSpeed(1.5);
                    }}>
                        1.5x
                    </button>
                    <button className="dropdown-item" type="button" onClick={() => {
                        setSpeed(2);
                    }}>
                        2x
                    </button>
                </div>
            </div>
        </div>

    )
}
