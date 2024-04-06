import { useDispatch, useSelector } from 'react-redux'
import AppButton from '../forms/AppButton'
import Loader from './Loader'
import AppInput from '../forms/AppInput'
import { useState } from 'react'
import AppCheckbox from '../forms/AppCheckbox'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../main'
import { useNavigate } from 'react-router-dom'

const DevEdit = ({ userData, cb }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loadingStatus = useSelector((state) => state.userInfo.isLoading)
    let [selectedValue, setSelectedValue] = useState('')

    const [checkboxList, setCheckboxList] = useState([
        {
            id: 'check1',
            name: 'HTML',
            checked: false,
        },
        {
            id: 'check2',
            name: 'JavaScript',
            checked: false,
        },
        {
            id: 'check3',
            name: 'CSS',
            checked: false,
        },
    ])
    const handleSelectChange = (e) => {
        setSelectedValue(selectedValue = e.target.value)
    }
    const handleCheckboxChange = (id) => {
        setCheckboxList((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id) {
                    return { ...item, checked: !item.checked }
                }
                return item
            })
        )
    }
    const editUser = () => {
        const form = document.forms[0]
        const checkedArray = checkboxList.filter((item) => item.checked)
        let tmpArr = []
        checkedArray.map((item) => {
            tmpArr.push(item.name)
        })
        updateDoc(doc(db, 'users', userData.id), {
            name: form.name.value,
            lastReview: form.lastPreview.value,
            nextReview: form.nextPreview.value,
            role: selectedValue,
            stack: tmpArr,
            permission: selectedValue === 'Developer' ? 0 : 1,
        })
        cb()
    }
    return (
        <>
            {!loadingStatus ? (
                <form
                    onSubmit={() => {
                        event.preventDefault()
                        editUser()
                    }}
                    className="h-auto w-auto rounded-lg bg-catalina-blue-300 p-2 px-4"
                >
                    <ul className="flex flex-col gap-3">
                        <li className="flex justify-between text-xl">
                            <p>Name: </p>
                            <AppInput
                                placeholder={'Input new Name'}
                                name={'name'}
                                defaultValue={userData.name}
                                required={true}
                            />
                        </li>
                        <li className="flex justify-between text-xl">
                            Last Preview:{' '}
                            <AppInput
                                placeholder={'Input new Last Preview'}
                                name={'lastPreview'}
                                defaultValue={userData.lastReview}
                                required={true}
                            />
                        </li>
                        <li className="flex justify-between text-xl">
                            Next Preview:{' '}
                            <AppInput
                                placeholder={'Input new Next Preview'}
                                name={'nextPreview'}
                                defaultValue={userData.nextReview}
                                required={true}
                            />
                        </li>
                        <li className="text-xl">
                            Role:{' '}
                            <select
                                value={selectedValue}
                                onChange={handleSelectChange}
                                className="rounded-md bg-catalina-blue-400 px-2"
                                required
                            >
                                <option
                                    value=""
                                    disabled
                                >{`Select options`}</option>
                                <option
                                    value="Developer"
                                    className="selection:bg-catalina-blue-400"
                                >
                                    Developer
                                </option>
                                <option value="TeamLead">Team Lead</option>
                                <option value="HR">HR</option>
                            </select>
                        </li>
                        <ul className="text-xl">
                            Stack:
                            {checkboxList.map((item, index) => (
                                <li className="text-base" key={item.id}>
                                    <AppCheckbox
                                        id={item.id}
                                        name={item.name}
                                        checked={item.checked}
                                        cb={() => handleCheckboxChange(item.id)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </ul>
                    <AppButton
                        text={'Done'}
                        type={'solid'}
                        onSubmit={() => {
                            event.preventDefault()
                            editUser()
                        }}
                    />
                </form>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default DevEdit
