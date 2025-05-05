import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth_action";

const Page = async () => {
    const user = await getCurrentUser();

    if (!user) {
        return (
            <div className="text-center mt-10">
                <h2>Please sign in to generate an interview.</h2>
            </div>
        );
    }

    return (
        <>
            <h3>Interview Generation</h3>

            <Agent
                userName={user.name || "Anonymous"}
                userId={user.id}
                // profileImage={user.profileURL || "/default-profile.png"}
                type="generate"
            />
        </>
    );
};

export default Page;
