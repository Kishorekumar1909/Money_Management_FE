import api from '../services/api';


export default function Register() {
const submit = async e => {
e.preventDefault();

await api.post('/auth/register', {
name: e.target.name.value,
email: e.target.email.value,
password: e.target.password.value
}).catch(err=>{
    alert(err.response.data.msg)
});
window.location = '/login';
};


return (
<form onSubmit={submit} className="max-w-md mx-auto mt-20 card">
<h2 className="text-xl mb-4">Register</h2>
<input name="name" className="input" placeholder="Name" />
<input name="email" className="input" placeholder="Email" />
<input name="password" type="password" className="input" placeholder="Password" />
<button className="btn w-full">Register</button>
</form>
);
}