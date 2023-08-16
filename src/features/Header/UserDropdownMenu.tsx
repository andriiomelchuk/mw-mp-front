import { useCallback } from 'react'
import { useAppSelector } from "../../store";
import { useNavigate } from 'react-router-dom'

import { paths } from "../../routes/helpers";
import DropdownPanel from '../../components/DropdownPanel/DropdownPanel'
import { selectUserData } from '../UserData/selectors'
import UserAvatar from './UserAvatar'
import { UserProfileDropdown } from './styled'


const UserDropdownMenu: React.FC = () => {
    const navigate = useNavigate()

    const { nameFirst, nameLast, displayName } = useAppSelector(selectUserData)

    const handleLogout = useCallback(() => navigate(paths.logout), [ navigate ])


    return (
        <DropdownPanel
            toggler={(props: any) => <UserAvatar onClick={props.onClick} />}
            toLeft
        >
            <UserProfileDropdown>
                <div>
                    <strong>
                        {displayName || (nameFirst + ' ' + nameLast)}
                    </strong>
                </div>

                <hr />

                <div>Заказы</div>
                <div>Возвраты</div>
                <div>Избранное</div>
                <div>Справка</div>
                <div>Поддержка</div>
                <div>Настройки</div>

                <hr />

                <div onClick={handleLogout}>Выйти</div>
            </UserProfileDropdown>
        </DropdownPanel>
    )
}

export default UserDropdownMenu
