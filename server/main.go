package main

import (
	"fmt"
	"log"

	"github.com/goccy/go-json"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type User struct {
	Firstname string      `json:"firstname"`
	LastName  string      `json:"lastname"`
	Age       json.Number `json:"age"`
	City      string      `json:"city"`
	State     string      `json:"state"`
}

func main() {
	fmt.Printf("Hello\n")

	app := fiber.New()

	// Initialize default config
	app.Use(cors.New())

	// Or extend your config for customization
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
		AllowMethods: "GET POST",
	}))

	Users := []User{}

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})

	app.Post("/", func(c *fiber.Ctx) error {
		newUser := &User{}
		if err := c.BodyParser(newUser); err != nil {
			return err
		}
		Users = append(Users, *newUser)

		fmt.Printf("%v", Users)

		return c.JSON(Users)
	})

	log.Fatal(app.Listen(":4000"))
}
