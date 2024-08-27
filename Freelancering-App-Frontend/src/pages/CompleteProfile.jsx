import CompleteProfileForm from "../features/authentication/CompleteProfileForm";

function CompleteProfile() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="h-screen bg-secondary-0">
        <div className="container xl:max-w-screen-xl">
          <CompleteProfileForm />
        </div>
      </div>
    </div>
  );
}
export default CompleteProfile;
