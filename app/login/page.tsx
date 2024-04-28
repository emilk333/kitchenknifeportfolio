import { InputFieldEmail, InputFieldPassword } from "@/app/components/Input/InputFieldRegular";
import { login, signup } from "./actions";
import { GenericServerButton } from "@/app/components/Button/GenericButton";
import { GenericServerButtonProps, IGenericButtonType } from "@/app/components/Button/types";

export default function LoginComponent() {

	const inputEmailConfig = {
		currentValue: "",
		label: "email",
		id: 1
	}

	const inputPasswordConfig = {
		currentValue: "",
		label: "password",
		id: 1
	}

	const buttonEmailConfig : GenericServerButtonProps = { 
        formAction: login,
        value : "Login",
        buttonType : IGenericButtonType.NEUTRAL
    }

	const buttonPasswordConfig : GenericServerButtonProps = { 
        formAction : signup,
        value : "Sign in",
        buttonType : IGenericButtonType.NEUTRAL
    }

    return (
        <article className="flex items-center">
            <form>
				<InputFieldEmail {...inputEmailConfig}/>
				<InputFieldPassword {...inputPasswordConfig}/>
				<GenericServerButton {...buttonEmailConfig} />
				<GenericServerButton {...buttonPasswordConfig} />
            </form>
        </article>
    );
}
