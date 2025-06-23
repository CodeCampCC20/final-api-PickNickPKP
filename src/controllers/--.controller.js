// import prisma from "../config/prisma.js";

// const docGetMeController = {};

// docGetMeController.getMe = async (req, res) => {
//    const { username, password ,specialization } = req.body;
//   const user = await prisma.user.findFirst({
//       where: {
//         username,
//         specialization,
//       },
//     });
//     console.log(user);
//   res.status(200).json({ success: true, id: user.id });
// };

// export default docGetMeController;