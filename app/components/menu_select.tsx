import { menu_items } from "~/constants/menu_items";

export function MenuSelect() {
    return (
        <div className="mt-8 pl-5 pr-5 pt-2 pb-2 bg-white border-[1px] border-[#f2b705] rounded-4xl drop-shadow-2xl flex flex-row justify-center items-center">
            {Object.values(menu_items).map((e, k) => (
                <div className="flex flex-row justify-center items-center">
                    <a key={k} href={e.href}>
                        <p className="text-black inter-sm text-lg">{e.title}</p>
                    </a>

                    {e.id !== Object.values(menu_items).length - 1 ? (
                        <div className="w-[1px] h-6 bg-black opacity-40 ml-2 mr-2" />
                    ) : null}
                </div>
            ))}
        </div>
    );
}
