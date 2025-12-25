'use client';

import {useRouter} from "next/navigation";

import {LogOut} from "lucide-react";


import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavItems from "@/components/NavItems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push("/sign-in");
    }

    const user = {username: "DK", email: "dk@vampirecave.net"};

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500"
                        onClick={handleSignOut}>
                    <Avatar className="h-8 w-8">
                        <AvatarImage
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0cMc6xHkPtTexoWk3QwGEzFC7qS_qzbFxkg&s"/>
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.username}
                        </AvatarFallback>
                    </Avatar>

                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-base font-medium-text-gray-400">{user.username}</span>
                    </div>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="text-gray-400">
                <DropdownMenuLabel>
                    <div className="flex relative items-center gap-3 py-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0cMc6xHkPtTexoWk3QwGEzFC7qS_qzbFxkg&s"/>
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.username}
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col">
                            <span className="text-base font-medium-text-gray-400">{user.username}</span>

                            <span className="text-sm text-gray-500">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="bg-gray-600" />

                <DropdownMenuItem
                    className="text-gray-100 text-md font-medium foucs:bg-transparent focus:text-yello-500 transition-colors cursor-pointer"
                    onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block" /> Log Out
                </DropdownMenuItem>

                <DropdownMenuSeparator className="hidden sm:block bg-gray-600" />

                <nav className="sm:hidden">
                    <NavItems />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default UserDropdown