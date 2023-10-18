'use strict'

const sendAction = async (actionData) => {
  const port = process.env.ACTION_SERVICE_PORT || 4000
  const url = process.env.BASE_URL || 'http://localhost'
  try {
    const response = await fetch(`${url}:${port}/action`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(actionData),
    })

    await response.json()
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  sendAction,
}
