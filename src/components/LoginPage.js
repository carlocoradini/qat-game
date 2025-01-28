import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      console.log("Cadastro realizado:", { email, password });
      alert("Cadastro realizado! (Protótipo)");
    } else {
      console.log("Login realizado:", { email, password });
      alert("Login realizado! (Protótipo)");
    }
  };

  const handleGoogleLogin = () => {
    console.log("Login com Gmail iniciado");
    alert("Login com Gmail (Protótipo)");
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>{isRegistering ? "Criar Conta" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {isRegistering ? "Registrar" : "Entrar"}
          </button>
        </form>
        <button onClick={handleGoogleLogin} style={styles.googleButton}>
          {isRegistering ? "Cadastrar com Gmail" : "Login com Gmail"}
        </button>
        <p style={styles.toggleText}>
          {isRegistering
            ? "Já possui uma conta?"
            : "Ainda não possui uma conta?"}{" "}
          <span
            onClick={() => setIsRegistering(!isRegistering)}
            style={styles.toggleLink}
          >
            {isRegistering ? "Fazer login" : "Cadastrar-se"}
          </span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
    backgroundColor: "#f8f9fa",
    borderRadius: "20px",
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  googleButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4285F4",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
  toggleText: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#666",
  },
  toggleLink: {
    color: "#4285F4",
    cursor: "pointer",
    marginLeft: "5px",
    textDecoration: "underline",
  },
};

export default LoginPage;
