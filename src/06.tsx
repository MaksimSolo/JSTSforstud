import React, {ChangeEvent, MouseEvent} from "react";

const callback = () => {
    // alert('Hey!')
    return 12;
}

window.setTimeout(callback, 1000)


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLDivElement>) => {
        console.log(event.currentTarget.title)

        alert('User have been deleted')
    }
    const saveUser = (event: MouseEvent<HTMLDivElement>) => {
        console.log(event.currentTarget.tabIndex)
        alert('User have been saved')
    }
    const onChangeTxtArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(event.currentTarget.value)
        alert('Text changed')
    }

    const onChangeInputArea = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)

    }

    const onBlurMessage = () => {
        console.log('Focus LOST!!!!!!')
    }

    return (
        <div>
            <textarea tabIndex={0} onBlur={onBlurMessage} onChange={onChangeTxtArea}>Dimych</textarea>
            <input tabIndex={1} onBlur={onBlurMessage} onChange={onChangeInputArea}/>
            <div title='deleteUser' tabIndex={2} onBlur={onBlurMessage} onClick={deleteUser}>delete</div>
            <div tabIndex={3} onBlur={onBlurMessage} onClick={saveUser}>save</div>
        </div>
    )
}