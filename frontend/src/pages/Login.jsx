import api from '../services/api';


export default function Login() {
const submit = async e => {
e.preventDefault();
try{
const res = await api.post('/auth/login', {
email: e.target.email.value,
password: e.target.password.value
});
localStorage.setItem('token', res.data.token);
window.location = '/';
}
catch(err){
    alert(err.response.data.msg)
}
};


return (
<form onSubmit={submit} className="max-w-md mx-auto mt-20 card">
<h2 className="text-xl mb-4">Login</h2>
<input name="email" className="input" placeholder="Email" />
<input name="password" type="password" className="input" placeholder="Password" />
<button className="btn w-full">Login</button>
</form>
);
}