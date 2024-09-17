"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getCurrentUser } from "/home/runner/work/azurechat/azurechat/src/features/auth-page/helpers"

const userEmails = process.env.USER_EMAIL_ADDRESSES?.split(",").map((email) =>
    email.toLowerCase().trim()
  );

const user = getCurrentUser();

type Page = "extensions" | "persona" | "prompt" | "chat" | "settings" | "unauthorized";

export const RevalidateCache = (props: {
  page: Page;
  params?: string | undefined;
  type?: "layout" | "page" | undefined;
}) => {
  const { page, params, type } = props;
  if (params) {
    revalidatePath(`/${page}/${params}`, type);
  } else {
    revalidatePath(`/${page}`, type);
  }
};

export const RedirectToPage = (path: Page) => {
  if(userEmails?.includes(user.email.toLowerCase())){
        redirect(`/${path}`);
      }
  else{redirect(`/unathorized`);
      }
};

export const RedirectToChatThread = (chatThreadId: string) => {
  redirect(`/chat/${chatThreadId}`);
};
