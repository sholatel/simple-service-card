import type { FC } from "react";
import { IconButton } from "./IconButton";
import { Menu01Icon, MessageAdd02Icon } from "hugeicons-react";

const Header:FC = ()=> {
    return (
        <div className="flex items-center justify-between">
            <div>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=example" alt="Logo"  className="w-10 h-10 rounded-full lg:w-12 lg:h-12"/>
            </div>

            <div className="flex items-center gap-2">
                <IconButton icon={<MessageAdd02Icon />} className="bg-gray-100 w-10 rounded-full h-10 flex items-center justify-center" />
                 <IconButton icon={<Menu01Icon/>} className="bg-gray-100 w-10 rounded-full h-10 flex items-center justify-center" />
            </div>
        </div>
    )
}

export default Header;