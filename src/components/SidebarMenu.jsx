import useUserStore from "../stores/userStore";

function SidebarMenu() {
  const user = useUserStore((state) => state.user);
  return (
    <div className="fixed top-14 h-full w-[350px] pt-2 overflow-auto flex flex-col gap-2 min-w[220px]">
      SidebarMenu
    </div>
  );
}

export default SidebarMenu;
