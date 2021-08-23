import { useDisclosure } from "@chakra-ui/hooks";
import { UseDisclosureProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ReactNode, useContext } from "react";
import { createContext } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

interface SidebarDrawerContextMethods {
  openSidebar: () => void;
  closeSidebar: () => void;
  isOpen: boolean;
}

const SidebarDrawerContext = createContext<SidebarDrawerContextMethods>({} as SidebarDrawerContextMethods);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  // const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    closeSidebar();
  }, [router.asPath])

  const [ isOpen, setIsOpen ] = useState(false);

  function openSidebar() {
    setIsOpen(true);
  }
  
  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <SidebarDrawerContext.Provider value={{openSidebar, closeSidebar, isOpen }}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);