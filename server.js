require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const faqData = JSON.parse(
    fs.readFileSync("faq.json", "utf8")
);

app.post("/chat", async (req, res) => {

    try {

        const userMessage =
            req.body.message.toLowerCase();

        if (faqData[userMessage]) {

            return res.json({
                source: "FAQ",
                response: faqData[userMessage]
            });
        }

        const completion =
            await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content:
                            "You are a helpful AI assistant."
                    },
                    {
                        role: "user",
                        content: userMessage
                    }
                ]
            });

        const answer =
            completion.choices[0].message.content;

        res.json({
            source: "OpenAI",
            response: answer
        });

    }
    catch (error) {

        console.error("FULL ERROR:");
        console.error(error);

        res.json({
            response: error.message
        });
    }
});

app.listen(process.env.PORT, () => {
    console.log(
        `Server Running on Port ${process.env.PORT}`
    );
});