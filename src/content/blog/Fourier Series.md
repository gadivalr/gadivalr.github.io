---
title: 'Fourier Series'
description: 'A brief introduction to Fourier Series and their applications in signal processing.'
pubDate: 'Jun 07 2025'
heroImage: '../../assets/fourier.png'
---
### Notes on the Real Fourier Series

The Fourier series is used to represent a periodic function as an infinite sum of sine and cosine functions with different frequencies and amplitudes. This allows us to analyze the function in terms of its frequency spectrum, that is, the harmonic components that make it up. The Fourier series is named after the French mathematician Jean-Baptiste Joseph Fourier, who discovered it in 1822.

The Fourier series of a function $f(x)$ defined on the interval $[-L, L]$ is the trigonometric series:

$$
\begin{align*}
f(x) &=\frac{a_0}{2} +\sum_{n=1}^{+\infty}\quad \Bigl[ a_n\cos\Bigl(\frac{n\pi x}{L}\Bigr)+b_n\sin\Bigl(\frac{n\pi x}{L}\Bigr) \Bigr]\\
&\text{Where the coefficients are:}\\
a_0&=\frac{1}{L}\int_{-L}^{L} f(x) \, dx\\ \quad a_n&=\frac{1}{L}\int_{-L}^{L} f(x) \cos(\frac{n\pi x}{L}) \, dx
\\ \quad b_n&=\frac{1}{L}\int_{-L}^{L} f(x) \sin(\frac{n\pi x}{L}) \, dx \\
\end{align*}
$$

**The Fourier series of an even function on $[-L, L]$ is the cosine series:**

$$
\begin{align*}
f(x)&=a_0+\sum_{n=1}^{+\infty} \quad a_n\cos(\frac{n\pi x}{L})\\
a_0&=\frac{2}{L}\int_{0}^{L} f(x) \, dx\\ \quad a_n&=\frac{2}{L}\int_{0}^{L} f(x) \cos(\frac{n\pi x}{L}) \, dx
\end{align*}
$$

**The Fourier series of an odd function on $[-L, L]$ is the sine series:**


$$
\begin{align*}
f(x)&=\sum_{n=1}^{+\infty} \quad b_n\sin(\frac{n\pi x}{L})\\
b_n&=\frac{2}{L}\int_{0}^{L} f(x) \sin(\frac{n\pi x}{L}) \, dx \\
\end{align*}
$$

**Example: Find the Fourier series of the function:**


$$
\begin{align*}
f(x)&=\begin{cases} -1 & \text{si } -\pi<x<0 \\ \quad1 & \text{si } 0<x<\pi \end{cases}
\end{align*}
$$

**Solution:**  
We note that the function is odd, so the Fourier series will be a sine series. Also, the function is periodic with period $2\pi$, so $L=\pi$.

Let's calculate the coefficient $b_n$ (using the general definition):


$$
\begin{align*}
b_n&=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x) \sin(\frac{n\pi x}{\pi}) \, dx\\
&=\frac{1}{\pi}\int_{-\pi}^{0} (-1) \sin(n x) \, dx \\
&+\frac{1}{\pi}\int_{0}^{\pi} (1) \sin(n x) \, dx\\
&=\frac{1}{\pi}{\Bigl[ \frac{1}{n}\cos(nx) \Bigr]}_{-\pi}^{0} -\frac{1}{\pi}{\Bigl[ \frac{1}{n}\cos(nx) \Bigr]}_{0}^{\pi}\\
&=\frac{1}{\pi}\Bigl[ \frac{\cos(0)}{n} -\frac{\cos(-n\pi)}{n} \Bigr] -\frac{1}{\pi}\Bigl[ \frac{\cos(n\pi)}{n} \\
&-\frac{\cos(0)}{n} \Bigr]\\
&=\frac{1}{\pi}\Bigl[ \frac{1}{n} -\frac{1}{n}\cos(n\pi) \Bigr] -\frac{1}{\pi}\Bigl[ \frac{1}{n}\cos(n\pi) -\frac{1}{n} \Bigr]\\
&=\frac{1}{\pi}\Bigl[ \frac{1}{n} -\frac{{(-1)}{^n}}{n} \Bigr] -\frac{1}{\pi}\Bigl[ \frac{(-1)^{n}}{n} -\frac{1}{n} \Bigr]\\
&=\frac{1}{\pi}\biggl(\Bigl[ \frac{1}{n} -\frac{(-1){^n}}{n} \Bigr] -\Bigl[ \frac{{(-1)}^{n}}{n} -\frac{1}{n} \Bigr] \biggr)\\
&=\frac{1}{\pi}\biggl(\frac{2}{n} -\frac{2 {(-1)}^{n}}{n} \biggr)\\
&=\frac{2}{n\pi}\biggl(1 -(-1)^{n} \biggr)\\
&=\frac{2}{\pi}\biggl( \frac{1 +(-1)^{n+1}}{n} \biggr)\\
\end{align*}
$$

Using the parity property of the sine function:

$$
\begin{align*}
b_n&=\frac{2}{\pi}\int_{0}^{\pi} f(x) \sin(\frac{n\pi x}{\pi}) \, dx\\
&=\frac{2}{\pi}\int_{0}^{\pi} (1) \sin(n x) \, dx\\
&=\frac{2}{\pi}{\Bigl[ -\frac{1}{n}\cos(nx) \Bigr]}_{0}^{\pi}\\
&=\frac{2}{\pi}\Bigl[ -\frac{1}{n}\cos(n\pi) +\frac{1}{n}\cos(0) \Bigr]\\
&=\frac{2}{\pi}\Bigl[ -\frac{1}{n}(-1)^{n} +\frac{1}{n} \Bigr]\\
&=\frac{2}{\pi}\biggl( \frac{1 -(-1)^{n}}{n} \biggr)\\
&=\frac{2}{\pi}\biggl( \frac{1 +(-1)^{n+1}}{n} \biggr)\\
\end{align*}
$$

Therefore, the Fourier series of the function is:

$$
\begin{align*}
f(x)&= \frac{2}{\pi}\sum_{n=1}^{+\infty} \quad \biggl( \frac{1 +(-1)^{n+1}}{n} \biggr) \sin(nx)\\
\end{align*}
$$

We note that both methods yield the same result, but the second method (using the parity property of the sine function) is shorter and easier to calculate.

---

### Remember: Parity Properties of Sine and Cosine Functions
**Even function:** A function $f(x)$ is even if $f(-x)=f(x)$ for all $x$ in the domain of $f(x)$.<br>
**Odd function:** A function $f(x)$ is odd if $f(-x)=-f(x)$ for all $x$ in the domain of $f(x)$.<br>
**Parity property of the sine function:** The sine function is an odd function, meaning $\sin(-x)=-\sin(x)$ for all $x$ in the domain of the sine function.<br>
**Parity property of the cosine function:** The cosine function is an even function, meaning $\cos(-x)=\cos(x)$ for all $x$ in the domain of the cosine function.<br>

Whenever we are working with an **odd function**, we can use the parity property of the sine function to calculate the coefficient $b_n$. Similarly, when we have an **even function**, we can use the parity property of the cosine function to calculate the coefficient $a_n$.

---
### Complex Fourier Series
The **complex Fourier series** is an alternative way to write the Fourier series of a function $f(x)$ defined on the interval $[-L,L]$. The complex Fourier series of a function $f(x)$ defined on the interval $[-L,L]$ is the series:

$$
\begin{align*}
f(x) &=\sum_{n=-\infty}^{+\infty} \quad c_n e^{i\frac{n\pi x}{L}}\\
\end{align*}
$$
Where the coefficient is given by:
$$
\begin{align*}
c_n=\frac{1}{2L}\int_{-L}^{L} f(x) e^{-i\frac{n\pi x}{L}} \, dx\\
\end{align*}
$$

**Example: Find the complex Fourier series of the function on $[-\pi, \pi]$:**

$$
\begin{align*}
f(t)&=\cos(\frac{t}{2})\\
\end{align*}
$$
**Solution:**
We note that the function is periodic with period $2\pi$, so $L=\pi$. <br>

We calculate the coefficient $c_n$:

$$
\begin{align*}
c_n&=\frac{1}{2\pi}\int_{-\pi}^{\pi} f(t) e^{-i\frac{n\pi t}{\pi}} \, dt\\
&=\frac{1}{2\pi}\int_{-\pi}^{\pi} \cos(\frac{t}{2}) e^{-in t} \, dt\\
&=\frac{1}{2\pi}\int_{-\pi}^{\pi} (\frac{e^{i\frac{t}{2}} + e^{-i\frac{t}{2}}}{2}) e^{-in t} \, dt\\
&=\frac{1}{4\pi}\int_{-\pi}^{\pi} (e^{i\frac{t}{2}} + e^{-i\frac{t}{2}}) e^{-in t} \, dt\\
&=\frac{1}{4\pi}\int_{-\pi}^{\pi} e^{i\frac{t}{2}} e^{-in t} \, dt +\frac{1}{4\pi}\int_{-\pi}^{\pi} e^{-i\frac{t}{2}} e^{-in t} \, dt\\
&=\frac{1}{4\pi}\int_{-\pi}^{\pi} e^{i(\frac{t}{2}-nt)} \, dt +\frac{1}{4\pi}\int_{-\pi}^{\pi} e^{-i(\frac{t}{2}+nt)} \, dt\\
&=\frac{1}{4\pi} \biggl[ \frac{e^{i(\frac{t}{2}-nt)}}{i(\frac{1}{2}-n)} \biggr]_{-\pi}^{\pi} +\frac{1}{4\pi} \biggl[ \frac{e^{-i(\frac{t}{2}+nt)}}{-i(\frac{1}{2}+n)} \biggr]_{-\pi}^{\pi}\\
&=\frac{1}{4\pi} \biggl[ \frac{e^{i(\frac{1}{2}-n)\pi}}{i(\frac{1}{2}-n)} -\frac{e^{-i(\frac{1}{2}-n)\pi}}{i(\frac{1}{2}-n)} + \frac{e^{-i(\frac{1}{2}+n)\pi}}{-i(\frac{1}{2}+n)} -\frac{e^{i(\frac{1}{2}+n)\pi}}{-i(\frac{1}{2}+n)} \biggr]\\
&=\frac{1}{4\pi} \biggl[ \frac{e^{i(\frac{1}{2}-n)\pi}}{i(\frac{1}{2}-n)} -\frac{e^{-i(\frac{1}{2}-n)\pi}}{i(\frac{1}{2}-n)} - \frac{e^{-i(\frac{1}{2}+n)\pi}}{i(\frac{1}{2}+n)} +\frac{e^{i(\frac{1}{2}+n)\pi}}{i(\frac{1}{2}+n)} \biggr]\\
&=\frac{1}{4\pi} \biggl[ \frac{e^{i\frac{\pi}{2}} e^{-in\pi}}{i(\frac{1}{2}-n)} -\frac{e^{-i\frac{\pi}{2}} e^{-in\pi}}{i(\frac{1}{2}-n)} - \frac{e^{-i\frac{\pi}{2}} e^{ in\pi}}{i(\frac{1}{2}+n)} +\frac{e^{i\frac{\pi}{2}} e^{in\pi}}{i(\frac{1}{2}+n)} \biggr]\\
&=\frac{1}{4\pi} \biggl[ \frac{i(-1)^n }{i(\frac{1}{2}-n)} -\frac{-i(-1)^n }{i(\frac{1}{2}-n)} - \frac{-i(-1)^n}{i(\frac{1}{2}+n)} +\frac{i(-1)^n}{i(\frac{1}{2}+n)} \biggr]\\
&=\frac{1}{4\pi} \biggl[ \frac{2(-1)^n }{(\frac{1}{2}-n)} +\frac{2(-1)^n}{(\frac{1}{2}+n)} \biggr]\\
&=\frac{(-1)^n}{2\pi} \biggl[ \frac{1 }{(\frac{1}{2}-n)} +\frac{1}{(\frac{1}{2}+n)}\biggr]\\
&=\frac{(-1)^n}{2\pi} \biggl[ \frac{2 }{(1-2n)} +\frac{2}{(1+2n)}\biggr]\\
&=\frac{(-1)^n}{\pi} \biggl[ \frac{1 }{(1-2n)} +\frac{1}{(1+2n)}\biggr]\\
&=\frac{(-1)^n}{\pi} \biggl[ \frac{2 }{(1-4n^2)} \biggr]\\
\end{align*}
$$

Therefore, the Fourier series of the function is:

$$
\begin{align*}
f(t)&=\frac{2}{\pi} \sum_{n=-\infty}^{+\infty} \quad \frac{(-1)^n}{(1-4n^2)} e^{in t}\\
\end{align*}
$$

Using the complex Fourier series often yields a shorter and easier-to-calculate result than using the real Fourier series. Additionally, the complex Fourier series is simpler to manipulate than the real Fourier series. For example, the complex Fourier series is easier to differentiate and integrate than the real Fourier series.


### Remember the following properties of the complex exponential:
$$
\begin{align*}
e^{i\theta}&=\cos(\theta)+i\sin(\theta)\\
e^{-i\theta}&=\cos(\theta)-i\sin(\theta)\\
\cos(\theta)&=\frac{e^{i\theta}+e^{-i\theta}}{2}\\
\sin(\theta)&=\frac{e^{i\theta}-e^{-i\theta}}{2i}\\
\cosh(\theta)&=\frac{e^{\theta}+e^{-\theta}}{2}\\
\sinh(\theta)&=\frac{e^{\theta}-e^{-\theta}}{2}\\
\end{align*}
$$

### Also remember that:
$$
\begin{align*}
\cos(n\pi)&= \cos(-n\pi)={(-1)}^{n}\\
\sin(n\pi)&=0\\
\cos(\frac{n\pi}{2})&=0\\
\sin(\frac{n\pi}{2})&= \sin(-\frac{n\pi}{2})={(-1)}^{n+1}\\
\end{align*}
$$

With these properties, you can calculate the complex Fourier series of a function more easily and quickly.