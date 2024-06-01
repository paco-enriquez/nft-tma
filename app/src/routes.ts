import {ComponentType} from "react";
import IndexPage from "./pages/index";


interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
    icon?: JSX.Element;
}

export const routes: Route[] = [
    {path: '/', Component: IndexPage}
]