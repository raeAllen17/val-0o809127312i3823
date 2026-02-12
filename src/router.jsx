import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "@/views/HomePage";
import { InvitationPage } from "./views/InvitationPage";
import { NoPage } from "./views/NoPage";
import { YesPage } from "./views/YesPage";
import { ImagesShow } from "./views/ImagesShow";
import { MessagePage } from "./views/MessagePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                index: true,
                element: <InvitationPage />
            },
            {
                path: "she-answered-no",
                element: <NoPage />
            }, {
                path: "she-answered-yes",
                element: <YesPage />
            },
            {
                path: "our-images",
                element: <ImagesShow />
            },
            {
                path: "my-message",
                element: <MessagePage />
            }
        ]
    },
],
    {
        basename: "/val-0o809127312i3823"
    }
)