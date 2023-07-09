import Cover from "@/Components/Cover";
import {useForm} from "@inertiajs/react";

export default function VerifyEmail({ status }){
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return <div className={"grid grid-cols-1 lg:grid-cols-2 min-h-screen"}>
        <Cover/>
        <div className="mb-4 text-sm text-gray-600">
            <h1>Email Verification</h1>
            Thanks for signing up! Before getting started, could you verify your email address by clicking on the
            link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    A new verification link has been sent to the email address you provided during registration.
                </div>)}
                <form onSubmit={submit}>
                    <div className="mt-4 flex items-center justify-between">
                        <button>Resend Verification</button>
                    </div>
                </form>
        </div>
    </div>
}
