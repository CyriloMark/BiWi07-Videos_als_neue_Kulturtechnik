import { menu_items } from "~/constants/menu_items";

export function MenuSelect() {
    return (
        <div className="pl-5 pr-5 pt-2 pb-2 bg-white border-[1px] border-[#f2b705] rounded-4xl drop-shadow-2xl z-20 flex md:flex-row flex-col justify-center items-center">
            {Object.values(menu_items).map((e, k) => (
                <div
                    key={k}
                    className="flex md:flex-row flex-col justify-center items-center">
                    <a href={e.href}>
                        <p className="text-black inter-sm text-lg">{e.title}</p>
                    </a>

                    {e.id !== Object.values(menu_items).length - 1 ? (
                        <div className="md:w-[1px] md:h-6 md:ml-2 md:mr-2 w-32 h-[1px] mt-1 mb-1 bg-black opacity-40" />
                    ) : null}
                </div>
            ))}
        </div>
    );
}
